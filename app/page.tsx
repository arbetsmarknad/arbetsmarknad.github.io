import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@arbetsmarknad/components/Breadcrumb";
import { Container } from "@arbetsmarknad/components/Container";
import { HeaderMenu } from "@arbetsmarknad/components/HeaderMenu";
import { Page } from "@arbetsmarknad/components/Page";
import { TopLevelHeading } from "@arbetsmarknad/components/TopLevelHeading";

export default function Home() {
  return (
    <Page>
      <HeaderMenu
        href="https://arbetsmarknad.github.io"
        text="arbetsmarknad.github.io"
      />
      <Breadcrumb className="py-4 w-full flex justify-center">
        <Container>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Arbetsmarknad</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Start</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Container>
      </Breadcrumb>
      <main className="flex flex-col items-center w-full py-4">
        <Container className="flex flex-col items-start gap-y-12 prose">
          <TopLevelHeading
            text="arbetsmarknad.github.io"
            subtext="Ett dokumentationsnav om den svenska arbetmarknaden"
          />
          <ol className="list-disc ps-4">
            <li>
              <a
                className="text-blue-600 underline"
                href="https://lagstiftning.github.io/"
              >
                Lagstiftning
              </a>
            </li>
            <li>
              <a
                className="text-blue-600 underline"
                href="https://kollektivavtal.github.io/"
              >
                Kollektivavtal
              </a>
            </li>
          </ol>
        </Container>
      </main>
    </Page>
  );
}
