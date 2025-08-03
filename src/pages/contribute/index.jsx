import Link from "next/link";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";

import Page from "@/ui/page";
import H1 from "@/ui/heading/h1";
import H2 from "@/ui/heading/h2";
import OutlineButton from "ui/buttons/buttonOutline";
import DashboardInfo from "../../features/contribute/dashboard/infoSection";

export default function ContributePage({ session }) {
  const { data: clientSession, status } = useSession();
  const loading = status === "loading";

  if (typeof window !== "undefined" && loading) return null;

  const activeSession = clientSession || session;
  const username = activeSession?.user?.username || "";

  return (
    <Page
      title="Dashboard - Atlas Contribute"
      description="Contribute to Atlas! Let's make our streets accessible for all."
      contribute
    >
      <section className="container flex flex-col pb-24 mx-auto px-5">
        <div className="lg:max-w-7xl lg:w-4/5 lg:mx-auto">
          <H1>Contribute to Atlas</H1>
          <div className="flex flex-col pt-8 md:flex-row justify-between items-center md:items-start">
            <H2>{username}</H2>
            <div className="mt-4 md:mt-2 flex space-x-4">
              <OutlineButton className="border hover:border-black">
                <Link href="/contribute/help" passHref>
                  Annotation Guide
                </Link>
              </OutlineButton>
              <button className="bg-red-600 transition-all font-semibold text-white hover:bg-red-700 py-2 px-4 border border-red-600 rounded duration-500 ease-in-out">
                <Link href="/contribute/annotate" passHref>
                  Start Annotating
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <DashboardInfo username={username} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return { props: { session } };
}