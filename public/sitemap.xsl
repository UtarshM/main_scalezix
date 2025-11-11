<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Scalezix Sitemap</title>
        <style>
          body {
            font-family: "Segoe UI", Arial, sans-serif;
            background: #fafafa;
            color: #333;
            margin: 40px;
          }
          h1 {
            color: #1a73e8;
            font-size: 28px;
            border-bottom: 3px solid #1a73e8;
            display: inline-block;
            margin-bottom: 20px;
          }
          table {
            border-collapse: collapse;
            width: 100%;
            background: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
          th, td {
            padding: 10px 12px;
            border-bottom: 1px solid #ddd;
            text-align: left;
          }
          th {
            background: #f0f0f0;
            color: #444;
          }
          tr:hover {
            background: #f9f9f9;
          }
          a {
            color: #1a73e8;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h1>Scalezix Sitemap</h1>
        <p>Total URLs: <xsl:value-of select="count(urlset/url)"/></p>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="urlset/url">
            <tr>
              <td><a href="{loc}"><xsl:value-of select="loc"/></a></td>
              <td><xsl:value-of select="lastmod"/></td>
              <td><xsl:value-of select="changefreq"/></td>
              <td><xsl:value-of select="priority"/></td>
            </tr>
          </xsl:for-each>
        </table>
        <p style="margin-top: 30px; color: #666; font-size: 13px;">© 2025 Scalezix Technologies</p>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
