import{_ as e,c as t,o as s,R as a}from"./chunks/framework.bdd825cc.js";const P=JSON.parse('{"title":"SIP023 Shadowsocks 2022 Extensible Identity Headers","description":"","frontmatter":{},"headers":[],"relativePath":"guide/sip023.md","filePath":"guide/sip023.md","lastUpdated":1683616140000}'),n={name:"guide/sip023.md"},i=a(`<h1 id="sip023-shadowsocks-2022-extensible-identity-headers" tabindex="-1">SIP023 Shadowsocks 2022 Extensible Identity Headers <a class="header-anchor" href="#sip023-shadowsocks-2022-extensible-identity-headers" aria-label="Permalink to &quot;SIP023 Shadowsocks 2022 Extensible Identity Headers&quot;">​</a></h1><p>Identity headers are one or more additional layers of headers, each consisting of the next layer&#39;s PSK hash. The next layer of an identity header is the next identity header, or the protocol header if it&#39;s the last identity header. Identity headers are encrypted with the current layer&#39;s identity PSK using an AES block cipher.</p><p>Identity headers are implemented in such a way that&#39;s fully backward compatible with current <a href="/guide/sip022.html">Shadowsocks 2022</a> implementations. Each identity processor is fully transparent to the next.</p><ul><li>iPSKn: The nth identity PSK that identifies the current layer.</li><li>uPSKn: The nth user PSK that identifies a user on the server.</li></ul><h2 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-label="Permalink to &quot;TCP&quot;">​</a></h2><p>In TCP requests, identity headers are located between salt and AEAD chunks.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">identity_subkey := blake3::derive_key(context: &quot;shadowsocks 2022 identity subkey&quot;, key_material: iPSKn + salt)</span></span>
<span class="line"><span style="color:#A6ACCD;">plaintext := blake3::hash(iPSKn+1)[0..16] // Take the first 16 bytes of the next iPSK&#39;s hash.</span></span>
<span class="line"><span style="color:#A6ACCD;">identity_header := aes_encrypt(key: identity_subkey, plaintext: plaintext)</span></span></code></pre></div><h2 id="udp" tabindex="-1">UDP <a class="header-anchor" href="#udp" aria-label="Permalink to &quot;UDP&quot;">​</a></h2><p>In UDP packets, identity headers are located between the separate header (session ID, packet ID) and AEAD ciphertext.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">plaintext := blake3::hash(iPSKn+1)[0..16] ^ session_id_packet_id // XOR to make it different for each packet.</span></span>
<span class="line"><span style="color:#A6ACCD;">identity_header := aes_encrypt(key: iPSKn, plaintext: plaintext)</span></span></code></pre></div><p>When iPSKs are used, the separate header MUST be encrypted with the first iPSK. Each identity processor MUST decrypt and re-encrypt the separate header with the next layer&#39;s PSK.</p><h2 id="scenarios" tabindex="-1">Scenarios <a class="header-anchor" href="#scenarios" aria-label="Permalink to &quot;Scenarios&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">client0       &gt;---+</span></span>
<span class="line"><span style="color:#A6ACCD;">(iPSK0:iPSK1:uPSK0)      \\</span></span>
<span class="line"><span style="color:#A6ACCD;">                          \\</span></span>
<span class="line"><span style="color:#A6ACCD;">      client1       &gt;------\\                        +---&gt;    server0 [iPSK1]</span></span>
<span class="line"><span style="color:#A6ACCD;">(iPSK0:iPSK1:uPSK1)         \\                      /      [uPSK0, uPSK1, uPSK2]</span></span>
<span class="line"><span style="color:#A6ACCD;">                             &gt;-&gt; relay0 [iPSK0] &gt;-&lt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      client2               /    [iPSK1, uPSK3]    \\</span></span>
<span class="line"><span style="color:#A6ACCD;">(iPSK0:iPSK1:uPSK2) &gt;------/                        +---&gt;    server1 [uPSK3]</span></span>
<span class="line"><span style="color:#A6ACCD;">                          /</span></span>
<span class="line"><span style="color:#A6ACCD;">      client3            /</span></span>
<span class="line"><span style="color:#A6ACCD;">   (iPSK0:uPSK3)    &gt;---+</span></span></code></pre></div><p>A set of PSKs, delimited by <code>:</code>, are assigned to each client. To send a request, a client MUST generate one identity header for each iPSK.</p><p>A relay decrypts the first identity header with its identity key, looks up the PSK hash table to find the target server, and relays the remainder of the request.</p><p>A single-port-multi-user-capable server decrypts the identity header with its identity key, looks up the user PSK hash table to find the cipher for the user PSK, and processes the remainder of the request.</p><p>In the above graph, <code>client0</code>, <code>client1</code>, <code>client2</code> are users of <code>server0</code>, which is relayed through <code>relay0</code>. <code>server1</code> is a simple server without identity header support. <code>client3</code> connects to <code>server1</code> via <code>relay0</code>.</p><p>To start a TCP session, <code>client0</code> generates a random salt, encrypts iPSK1&#39;s hash with iPSK0-derived subkey as the 1st identity header, encrypts uPSK0&#39;s hash with iPSK1-derived subkey as the 2nd identity header, and finishes the remainder of the request following the original spec.</p><p>To process the TCP request, <code>relay0</code> decrypts the 1st identity header with iPSK0-derived subkey, looks up the PSK hash table, and writes the salt and remainder of the request (without the processed identity header) to <code>server0</code>.</p><p>To send a UDP packet, <code>client0</code> encrypts the separate header with iPSK0, encrypts (iPSK1&#39;s hash XOR session_id_packet_id) with iPSK0 as the 1st identity header, encrypts (uPSK0&#39;s hash XOR session_id_packet_id) with iPSK1 as the 2nd identity header, and finishes off following the original spec.</p><p>To process the UDP packet, <code>relay0</code> decrypts the separate header in-place with iPSK0, decrypts the 1st identity header with iPSK0, looks up the PSK hash table, re-encrypt the separate header into the place of the first identity header, and sends the packet (starting at the re-encrypted separate header) to <code>server0</code>.</p>`,21),r=[i];function o(d,l,p,c,h,y){return s(),t("div",null,r)}const S=e(n,[["render",o]]);export{P as __pageData,S as default};
