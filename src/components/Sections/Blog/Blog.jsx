import SectionTitle from "../../SectionTitle/SectionTitle";
import { TabPanel, useTabs } from "react-headless-tabs";
import TabSelector from "./TabSelector/TabSelector";
import BlogSections from "./BlogSections/BlogSections";
import { useEffect, useState } from "react";
import './Blog.css'

const Blog = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch("sports.json")
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, [sports]);

  const [selectedTab, setSelectedTab] = useTabs([
    "sports",
    "entertainment",
    "health",
    "billing",
  ]);

  return (
    <section className="py-16 blog-section">
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
          <TabPanel hidden={selectedTab !== "sports"}>
            <BlogSections topic={sports}></BlogSections>
          </TabPanel>
          <TabPanel hidden={selectedTab !== "entertainment"}>
            <BlogSections topic={sports}></BlogSections>
          </TabPanel>
          <TabPanel hidden={selectedTab !== "health"}>
            <BlogSections topic={sports}></BlogSections>
          </TabPanel>
        </div>
      </div>
    </section>
  );
};

export default Blog;
