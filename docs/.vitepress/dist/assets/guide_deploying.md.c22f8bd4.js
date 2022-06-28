import{_ as e,c as s,o as a,a as n}from"./app.b1c59064.js";const g=JSON.parse('{"title":"Python","description":"","frontmatter":{},"headers":[{"level":2,"title":"Python","slug":"python"},{"level":2,"title":"Go","slug":"go"},{"level":2,"title":"Go from Outline","slug":"go-from-outline"},{"level":2,"title":"C with libev","slug":"c-with-libev"},{"level":2,"title":"C++ with Qt","slug":"c-with-qt"},{"level":2,"title":"Perl","slug":"perl"}],"relativePath":"guide/deploying.md","lastUpdated":null}'),o={name:"guide/deploying.md"},r=n(`<h2 id="python" tabindex="-1">Python <a class="header-anchor" href="#python" aria-hidden="true">#</a></h2><p>shadowsocks-python is the initial version written by <a href="https://github.com/clowwindy" target="_blank" rel="noopener noreferrer">@clowwindy</a>. It aims to provide a simple-to-use and easy-to-deploy implementation with basic features of shadowsocks.</p><h4 id="pypi" tabindex="-1">PyPI <a class="header-anchor" href="#pypi" aria-hidden="true">#</a></h4><p>First, make sure you have Python 2.6 or 2.7.</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ python --version</span></span>
<span class="line"><span style="color:#A6ACCD;">Python 2.6.8</span></span>
<span class="line"></span></code></pre></div><p>Then install from PIP</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ pip install shadowsocks</span></span>
<span class="line"></span></code></pre></div><h4 id="github" tabindex="-1">GitHub <a class="header-anchor" href="#github" aria-hidden="true">#</a></h4><p>Checkout the source codes and run the scripts directly.</p><p><a href="https://github.com/shadowsocks" target="_blank" rel="noopener noreferrer">https://github.com/shadowsocks</a></p><p>shadowsocks-python is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener noreferrer">Apache License, Version 2.0</a>.</p><h2 id="go" tabindex="-1">Go <a class="header-anchor" href="#go" aria-hidden="true">#</a></h2><p><a href="https://github.com/shadowsocks/go-shadowsocks2" target="_blank" rel="noopener noreferrer">go-shadowsocks2</a> is the next-generation Shadowsocks in Go, maintained by <a href="https://github.com/riobard" target="_blank" rel="noopener noreferrer">@riobard</a>, supersedes the discontinued <a href="https://github.com/shadowsocks/shadowsocks-go" target="_blank" rel="noopener noreferrer">shadowsocks-go</a>.</p><h4 id="github-1" tabindex="-1">GitHub <a class="header-anchor" href="#github-1" aria-hidden="true">#</a></h4><p>Use <code>go get</code> to install.</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ go get -u -v github.com/shadowsocks/go-shadowsocks2</span></span>
<span class="line"></span></code></pre></div><p>go-shadowsocks2 is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener noreferrer">Apache License, Version 2.0</a>.</p><h2 id="go-from-outline" tabindex="-1">Go from Outline <a class="header-anchor" href="#go-from-outline" aria-hidden="true">#</a></h2><p><a href="https://github.com/Jigsaw-Code/outline-ss-server" target="_blank" rel="noopener noreferrer">outline-ss-server</a> is the shadowsocks implementation used by the Outline Server, but it can be used standalone. Main features:</p><ul><li>Multiple users on a single port and multiple ports.</li><li>Whitebox monitoring of the service using <a href="https://prometheus.io" target="_blank" rel="noopener noreferrer">prometheus.io</a></li><li>Live updates via config change + SIGHUP</li><li>Prohibits unsafe access to localhost ports and usage of non-AEAD ciphers</li></ul><h4 id="github-2" tabindex="-1">GitHub <a class="header-anchor" href="#github-2" aria-hidden="true">#</a></h4><p>Download pre-built binaries from the <a href="https://github.com/Jigsaw-Code/outline-ss-server/releases" target="_blank" rel="noopener noreferrer">GitHub releases</a> or build it from source:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">go get github.com/Jigsaw-code/outline-ss-server</span></span>
<span class="line"><span style="color:#A6ACCD;">$(go env GOPATH)/bin/outline-ss-server -config=config.yml -metrics=127.0.0.1:9091</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>outline-ss-server is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener noreferrer">Apache License, Version 2.0</a>.</p><h2 id="c-with-libev" tabindex="-1">C with libev <a class="header-anchor" href="#c-with-libev" aria-hidden="true">#</a></h2><p>shadowsocks-libev is a lightweight and full featured port for embedded devices and low end boxes. It&#39;s a pure C implementation and has a very small footprint (several megabytes) for thousands of connections. This port is maintained by <a href="https://github.com/madeye" target="_blank" rel="noopener noreferrer">@madeye</a>.</p><h4 id="debian-ubuntu" tabindex="-1">Debian/Ubuntu: <a class="header-anchor" href="#debian-ubuntu" aria-hidden="true">#</a></h4><p>shadowsocks-libev is available in the official repository for Debian 9(&quot;Stretch&quot;), unstable, Ubuntu 16.10 and later derivatives:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo apt update</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install shadowsocks-libev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>For Debian Jessie users, please install it from jessie-backports:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo sh -c &#39;printf &quot;deb http://httpredir.debian.org/debian jessie-backports</span></span>
<span class="line"><span style="color:#A6ACCD;">main&quot; &gt; /etc/apt/sources.list.d/jessie-backports.list&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get update</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get -t jessie-backports install shadowsocks-libev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-hidden="true">#</a></h4><p>shadowsocks-libev is shipped also in containers, which makes it a great choice if your cloud provider is Docker-ready or if you aim to build a scalable solution.</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker pull shadowsocks/shadowsocks-libev</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -e PASSWORD=&lt;password&gt; -p&lt;server-port&gt;:8388 -p&lt;server-port&gt;:8388/udp -d shadowsocks/shadowsocks-libev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>More information about the image can be found <a href="https://github.com/shadowsocks/shadowsocks-libev/blob/master/docker/alpine/README.md" target="_blank" rel="noopener noreferrer">here</a>.</p><h4 id="github-3" tabindex="-1">GitHub <a class="header-anchor" href="#github-3" aria-hidden="true">#</a></h4><p>Build and install the project from source code.</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ sudo apt-get install --no-install-recommends build-essential autoconf libtool \\</span></span>
<span class="line"><span style="color:#A6ACCD;">        libssl-dev gawk debhelper dh-systemd init-system-helpers pkg-config asciidoc \\</span></span>
<span class="line"><span style="color:#A6ACCD;">        xmlto apg libpcre3-dev zlib1g-dev libev-dev libudns-dev libsodium-dev libmbedtls-dev libc-ares-dev automake</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git clone https://github.com/shadowsocks/shadowsocks-libev.git</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> shadowsocks-libev</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git submodule update --init</span></span>
<span class="line"><span style="color:#A6ACCD;">$ ./autogen.sh </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> ./configure </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> make</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo make install</span></span>
<span class="line"></span></code></pre></div><p>shadowsocks-libev is licensed under the <a href="https://www.gnu.org/copyleft/gpl.html" target="_blank" rel="noopener noreferrer">GNU General Public License v3.0</a>.</p><h2 id="c-with-qt" tabindex="-1">C++ with Qt <a class="header-anchor" href="#c-with-qt" aria-hidden="true">#</a></h2><p>libQtShadowsocks is a lightweight and ultra-fast shadowsocks library written in C++ with Qt 5. The client <code>shadowsocks-libqss</code> can be used in both client-side and server-side. This port is maintained by <a href="https://github.com/librehat" target="_blank" rel="noopener noreferrer">@librehat</a>.</p><h4 id="prebuilt-binaries" tabindex="-1">Prebuilt binaries <a class="header-anchor" href="#prebuilt-binaries" aria-hidden="true">#</a></h4><p>Download pre-built binaries from <a href="https://github.com/shadowsocks/libQtShadowsocks/releases" target="_blank" rel="noopener noreferrer">https://github.com/shadowsocks/libQtShadowsocks/releases</a></p><h4 id="github-4" tabindex="-1">GitHub <a class="header-anchor" href="#github-4" aria-hidden="true">#</a></h4><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git clone https://github.com/shadowsocks/libQtShadowsocks.git</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> libQtShadowsocks</span></span>
<span class="line"><span style="color:#A6ACCD;">$ qmake</span></span>
<span class="line"><span style="color:#A6ACCD;">$ make -j4</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo make install</span></span>
<span class="line"></span></code></pre></div><p>libQtShadowsocks is licensed under the <a href="https://www.gnu.org/licenses/lgpl.html" target="_blank" rel="noopener noreferrer">GNU Lesser General Public License, version 3.0</a></p><h2 id="perl" tabindex="-1">Perl <a class="header-anchor" href="#perl" aria-hidden="true">#</a></h2><p>Net::Shadowsocks is an asynchronous, non-blocking Shadowsocks client and server Perl module maintained by <a href="https://github.com/zhou0" target="_blank" rel="noopener noreferrer">@zhou0</a>.</p><h4 id="setting-up" tabindex="-1">Setting up <a class="header-anchor" href="#setting-up" aria-hidden="true">#</a></h4><p>You need a Perl interpreter to execute Perl program. Any Unix-like system, including Linux and Mac OS X, has Perl pre-installed. Windows does not have Perl installed by default, so you need to install Strawberry Perl. The source code is available on CPAN and github. Download from CPAN <a href="https://metacpan.org/release/Net-Shadowsocks" target="_blank" rel="noopener noreferrer">https://metacpan.org/release/Net-Shadowsocks</a> or download from github <a href="https://github.com/zhou0/shadowsocks-perl" target="_blank" rel="noopener noreferrer">https://github.com/zhou0/shadowsocks-perl</a></p><h4 id="installing" tabindex="-1">Installing <a class="header-anchor" href="#installing" aria-hidden="true">#</a></h4><p>On Unix-like systems, either</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ perl Build.PL</span></span>
<span class="line"><span style="color:#A6ACCD;">$ ./Build</span></span>
<span class="line"><span style="color:#A6ACCD;">$ ./Build </span><span style="color:#82AAFF;">test</span></span>
<span class="line"><span style="color:#A6ACCD;">$ ./Build install</span></span>
<span class="line"></span></code></pre></div><p>or</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ perl Makefile.PL</span></span>
<span class="line"><span style="color:#A6ACCD;">$ make</span></span>
<span class="line"><span style="color:#A6ACCD;">$ make </span><span style="color:#82AAFF;">test</span></span>
<span class="line"><span style="color:#A6ACCD;">$ make install</span></span>
<span class="line"></span></code></pre></div><p>You might need to change <code>make</code> to <code>dmake</code> or <code>nmake</code> depending on the compiler toolchain used on Windows. If you have cpan, you can also install using this command:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ cpan Net::Shadowsocks</span></span>
<span class="line"></span></code></pre></div><h4 id="running" tabindex="-1">Running <a class="header-anchor" href="#running" aria-hidden="true">#</a></h4><p>There is a <a href="http://server.pl" target="_blank" rel="noopener noreferrer">server.pl</a> script under the <code>eg</code> directory. Put your <code>config.json</code> in the same directory as <code>server.pl</code> and run the <code>server.pl</code> script there.</p><p>Net::Shadowsocks is licensed under the [Artistic License (2.0)] (<a href="http://www.perlfoundation.org/artistic_license_2_0" target="_blank" rel="noopener noreferrer">http://www.perlfoundation.org/artistic_license_2_0</a>).</p>`,60),l=[r];function t(i,p,c,d,h,u){return a(),s("div",null,l)}var f=e(o,[["render",t]]);export{g as __pageData,f as default};
