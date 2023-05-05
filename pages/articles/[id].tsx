import { useRouter } from "next/router";
import articleData from "../../data/blogs.json";
import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

export function getStaticProps(staticProps: { params: any }) {
  const params = staticProps.params;
  return {
    props: {
      article: articleData.find((article) => {
        return article.id.toString() === params.id;
      }),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }],
    fallback: false,
  };
}

const article = (props: {
  article: {
    name:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | ReactFragment
      | ReactPortal
      | null
      | undefined;
  };
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <div>
      article page {router.query.id}
      <Link href="/">back to home</Link>
      <p>{props.article.name}</p>
    </div>
  );
};

export default article;
