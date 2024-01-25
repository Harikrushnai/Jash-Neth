"use client";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify"

// reference: https://stackoverflow.com/questions/65646007/next-js-dompurify-sanitize-shows-typeerror-dompurify-webpack-imported-module
export default function RichTextContent({ html }) {
    const [sanitizedHtml, setSanitizedHtml] = useState("");

    useEffect(() => {
        const domPurify = DOMPurify(window);
        const cleanHtml = domPurify.sanitize(html);
        setSanitizedHtml(cleanHtml);
    }, []);

    if(!sanitizedHtml) return null

    // add styles for the different HTML elements (list, para, bold, link, e.t.c)
    return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div>
}