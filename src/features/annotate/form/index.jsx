import { ReactPictureAnnotation } from "./react-picture-annotation/index";
import H1 from "ui/heading/h1";
import { getSession, useSession } from "next-auth/react";

export default function AnnotateForm({ data, current, total }) {
  const onSelect = (selectedId) => {};
  const onChange = (data) => {};
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (typeof window !== "undefined" && loading) return null;

  return (
    <div className="px-5">
      <div className="flex flex-row mb-12 justify-between">
        <H1>
          <span className="text-2xl uppercase font-thin">
            Currently Annotating:
          </span>
          <br /> Image #{current} / {total}
        </H1>
        <div className="flex align-middle flex-col justify-center">
          <a
            href="/contribute/help"
            target="_blank"
            className="block h-12 w-72 text-center mt-16 mr-8 text-white bg-primary py-3 px-5 hover:bg-primary border rounded-md shadow-md hover:shadow-none"
          >
            Check out our Annotation Guide
          </a>
        </div>
      </div>

      <ReactPictureAnnotation
        image={data.url}
        onSelect={onSelect}
        onChange={onChange}
        width={640 * 1.5}
        height={400 * 1.5}
        annotationData={data.annotationList}
        imageID={data.imageID}
        city={data.city}
        currentAnnotationCount={current}
        username={session.user.username}
      />
    </div>
  );
}

AnnotateForm.getInitialProps = async (context) => {
  const session = await getSession(context);
  return {
    session,
  };
};
