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
import {
  DescriptionList,
  DescriptionItem,
  DescriptionTerm,
  DescriptionDetails,
} from "@arbetsmarknad/components/DescriptionList";
import { Section } from "@arbetsmarknad/components/Section";
import { SectionHeading } from "@arbetsmarknad/components/SectionHeading";
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
          <Section>
            <SectionHeading>Sektioner</SectionHeading>
            <DescriptionList>
              <DescriptionItem>
                <DescriptionTerm>
                  <a
                    className="font-bold underline text-blue-600"
                    href="https://arbetsmiljo.github.io/"
                  >
                    Arbetsmiljö
                  </a>
                </DescriptionTerm>
                <DescriptionDetails>
                  Statistik och data om arbetsmiljö
                </DescriptionDetails>
              </DescriptionItem>

              <DescriptionItem>
                <DescriptionTerm>
                  <a
                    className="font-bold underline text-blue-600"
                    href="https://kollektivavtal.github.io/"
                  >
                    Kollektivavtal
                  </a>
                </DescriptionTerm>
                <DescriptionDetails>
                  Arkiv över kollektivavtal
                </DescriptionDetails>
              </DescriptionItem>

              <DescriptionItem>
                <DescriptionTerm>
                  <a
                    className="font-bold underline text-blue-600"
                    href="https://lagstiftning.github.io/"
                  >
                    Lagstiftning
                  </a>
                </DescriptionTerm>
                <DescriptionDetails>
                  Engelska översättningar av lagar inom arbetsrätt
                </DescriptionDetails>
              </DescriptionItem>
            </DescriptionList>
          </Section>
        </Container>
      </main>
    </Page>
  );
}
