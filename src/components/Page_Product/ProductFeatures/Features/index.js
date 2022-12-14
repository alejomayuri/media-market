export default function Features({ data }) {
    let name = null;
    let features = [];

    if (data) {
        name = data?.name
        features = data?.features
    }

    return (
        <>
            <h3>{name}</h3>
            <ul>
            {
                features && features.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }
            </ul>
        </>
    );
}