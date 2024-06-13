import DocCard from '@theme/DocCard';

export default function DocRef({ href, label }) {
    return (
        <article className="col col--9 margin-bottom--lg">
            <DocCard item={{
                type: "link",
                href: href,
                label: label
            }} />
        </article>
    );
}