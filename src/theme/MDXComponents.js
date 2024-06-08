// Import the original mapper
import MdnRef from '@site/src/components/MdnRef';
import MDXComponents from '@theme-original/MDXComponents';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    MdnRef,
};