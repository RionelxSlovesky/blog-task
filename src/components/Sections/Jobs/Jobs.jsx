import SectionTitle from "../../SectionTitle/SectionTitle";
import { TabPanel, useTabs } from "react-headless-tabs";
import TabSelector from "../Blog/TabSelector/TabSelector";
import { useEffect, useState } from "react";
import JobSections from "./JobSections/JobSections";

const Jobs = () => {

  const [academics, setAcademics] = useState([])

  useEffect(() => {
    fetch('academics.json')
    .then(res => res.json())
    .then(data => setAcademics(data))
  },[academics])

  const [selectedTab, setSelectedTab] = useTabs([
    "academics",
    "medical",
    "engineering",
  ]);

  return (
    <section className="py-16 blog-section">
      <SectionTitle title="Jobs"></SectionTitle>
      <div>
        <nav className="flex justify-center">
          <TabSelector
            isActive={selectedTab === "academics"}
            onClick={() => setSelectedTab("academics")}
          >
            Academics
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "medical"}
            onClick={() => setSelectedTab("medical")}
          >
            Medical
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "engineering"}
            onClick={() => setSelectedTab("engineering")}
          >
            Engineering
          </TabSelector>
        </nav>
        <div className="p-4">
          <TabPanel hidden={selectedTab !== "academics"}>
            <JobSections jobs={academics}></JobSections>
          </TabPanel>
          <TabPanel hidden={selectedTab !== "medical"}>
            
          </TabPanel>
          <TabPanel hidden={selectedTab !== "engineering"}>
            
          </TabPanel>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
