import parse from "html-react-parser"
import Image from "next/image"

const options = {
  replace: (domNode) => {
    // Look for an img tag and replace it with Image.
    if (domNode && domNode.name === "img" && domNode.attribs) {
      const { src, alt, width, height } = domNode.attribs
      
      // Convert width and height to numbers, default to 800 if not provided
      const imageWidth = width ? parseInt(width, 10) : 800
      const imageHeight = height ? parseInt(height, 10) : 600
      
      return (
        <Image
          src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${src}`}
          width={imageWidth}
          height={imageHeight}
          alt={alt || ""}
          style={{ width: "100%", height: "auto" }}
        />
      )
    }
  },
}

export function Body({ value }) {
  return <>{parse(value, options)}</>
}
