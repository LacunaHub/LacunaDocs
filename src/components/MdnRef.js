export default function MdnRef({ dataType }) {
    return (
        <a href={`https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/${dataType}`}>{dataType}</a>
    );
}