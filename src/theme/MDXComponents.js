// Import the original mapper
import DocRef from '@site/src/components/DocRef'
import MdnRef from '@site/src/components/MdnRef'
import MDXComponents from '@theme-original/MDXComponents'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  MdnRef,
  DocRef,
  Tabs,
  TabItem
}
