import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader className="pizza-block"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#ebebeb"
        foregroundColor="#ffffff"
        {...props}
    >
        <rect x="0" y="0" rx="48" ry="48" width="270" height="454" />
    </ContentLoader>
)

export default Skeleton

