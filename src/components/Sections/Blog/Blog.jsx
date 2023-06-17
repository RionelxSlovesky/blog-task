import SectionTitle from "../../SectionTitle/SectionTitle";
import { TabPanel, useTabs } from "react-headless-tabs";
import TabSelector from "./TabSelector/TabSelector";

const Blog = () => {
  const [selectedTab, setSelectedTab] = useTabs([
    "sports",
    "entertainment",
    "health",
    "billing",
  ]);

  return (
    <section>
      <SectionTitle title="Blog"></SectionTitle>
      <div>
        <nav className="flex justify-center">
          <TabSelector
            isActive={selectedTab === "sports"}
            onClick={() => setSelectedTab("sports")}
          >
            Sports
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "entertainment"}
            onClick={() => setSelectedTab("entertainment")}
          >
            Entertainment
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "health"}
            onClick={() => setSelectedTab("health")}
          >
            Health
          </TabSelector>
        </nav>
        <div className="p-4">
          <TabPanel hidden={selectedTab !== "sports"}>Sports</TabPanel>
          <TabPanel hidden={selectedTab !== "entertainment"}>Entertainment</TabPanel>
          <TabPanel hidden={selectedTab !== "health"}>Health</TabPanel>
        </div>
      </div>
    </section>
  );
};

export default Blog;
