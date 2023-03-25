import { getAllIds } from '../../lib/posts'

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false,
  };
}
