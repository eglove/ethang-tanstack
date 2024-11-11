import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Link } from "@nextui-org/link";
import { Spinner } from "@nextui-org/spinner";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import isNil from "lodash/isNil.js";
import map from "lodash/map.js";

import { MainLayout } from "../components/layouts/main-layout";
import { SanityContent } from "../components/sanity/sanity-content";
import { recommendedCoursesQuery } from "../query/recommended-courses";

const Courses = () => {
  const { data, isPending } = useQuery(recommendedCoursesQuery());

  if (isPending || isNil(data)) {
    return (
      <MainLayout>
        <Spinner />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1 className="my-4 text-3xl font-bold">
        {data.title}
      </h1>
      <SanityContent value={data.description} />
      <Accordion
        className="mt-4 max-w-prose p-0"
        variant="splitted"
      >
        {map(data.courseSections, (section) => {
          return (
            <AccordionItem
              key={section._id}
              title={section.title}
            >
              <div className="prose max-w-max text-foreground">
                <SanityContent value={section.description} />
                <ul className="list-decimal">
                  {map(section.courses, (course) => {
                    return (
                      <li key={course._id}>
                        <Link
                          isExternal
                          href={course.url}
                        >
                          {course.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </MainLayout>
  );
};

export const Route = createFileRoute("/courses")({
  component: Courses,
});
