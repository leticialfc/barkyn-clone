import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import AnnotatedImageSection from "../../components/AnnotatedImageSection/AnnotatedImageSection";
import { fetchHomeData } from "../../api/api";
import { useEffect, useState } from "react";
import { SectionType } from "../../types/types";

const Home = () => {
  const [data, setData] = useState({} as any);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchHomeData();
      setData(data);
    };

    getData();
  }, []);

  const renderSections = () => {
    {
      if (data.sections)
        return data.sections.map((section: any) => {
          if (section.type === SectionType.Simple) {
            return (
              <Section
                key={section.id}
                title={section.title}
                cards={section.cards}
              />
            );
          } else if (section.type === SectionType.Annotated) {
            return (
              <AnnotatedImageSection
                key={section.id}
                imgOnLeft={section.id % 2 !== 1}
                data={section.data}
              />
            );
          }
          return null;
        });
    }
  };

  return (
    <>
      {data && (
        <>
          <Header />
          <Hero />
          {renderSections()}
        </>
      )}
    </>
  );
};

export default Home;
