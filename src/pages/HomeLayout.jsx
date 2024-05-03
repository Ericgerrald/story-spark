import { Outlet, useNavigation } from "react-router-dom";
import NvaBar from "../components/NvaBar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <NvaBar />
      <section>
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default HomeLayout;
