---
title: Router
metaTitle: Vue
---

## IIS中History模式配置

**a.下载[UrlWrite](https://www.iis.net/downloads/microsoft/url-rewrite)**

**b.网站根目录新建web.config**

``` bash web.config
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="Vue页面刷新404问题">
                    <match url=".*" />
                    <conditions>
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="/index.html" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
```
