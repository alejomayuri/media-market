export default function Image({ src, alt }) {
    let showImage = null;
    let lazyObject = {};

    if (src) {
        lazyObject = {
            loading: "lazy",
        }

        showImage = (
            <picture>
                <img
                    {...lazyObject}
                    src={src}
                    alt={alt}
                    width="100%"
                    height="100%"
                />
            </picture>
        )
    }

    return (
        <>
            {showImage}
        </>
    );
}