<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:fn="http://www.w3.org/2005/xpath-functions" xmlns:wms="http://www.opengis.net/wms">
	<xsl:output media-type="text/javascript" method="text" omit-xml-declaration="yes" indent="no" />
	<xsl:template match="*">
		{ <xsl:apply-templates select="//wms:Layer/wms:Layer" /> }
	</xsl:template>
	<xsl:template match="//wms:Layer/wms:Layer">'<xsl:value-of select="wms:Name"/>': { queryable: <xsl:choose>
			<xsl:when test="@queryable">true</xsl:when>
			<xsl:otherwise>false</xsl:otherwise>
		</xsl:choose>, title: '<xsl:value-of select="wms:Title"/>'<xsl:if test="wms:Abstract and string-length(wms:Abstract) != 0">, abstract: '<xsl:value-of select="wms:Abstract"/>'</xsl:if> }, </xsl:template>
</xsl:stylesheet>
