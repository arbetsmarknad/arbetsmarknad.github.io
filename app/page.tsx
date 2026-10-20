import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@svenskamodellen/components/Breadcrumb";
import { Container } from "@svenskamodellen/components/Container";
import { Footer } from "@svenskamodellen/components/Footer";
import { Main } from "@svenskamodellen/components/Main";
import { Page } from "@svenskamodellen/components/Page";
import {
  DescriptionList,
  DescriptionItem,
  DescriptionTerm,
  DescriptionDetails,
} from "@/components/DescriptionList";
import { Section } from "@svenskamodellen/components/Section";
import { SectionHeading } from "@svenskamodellen/components/SectionHeading";
import { TopLevelHeading } from "@svenskamodellen/components/TopLevelHeading";

export default function Home() {
  return (
    <Page>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Svenska modellen</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Start</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Main>
        <Container className="flex flex-col items-start gap-y-12">
          <TopLevelHeading
            text="Svenska Modellen"
            subtext="Ett dokumentationsnav om den svenska arbetmarknaden"
          />
          <Section>
            <SectionHeading>Sektioner</SectionHeading>
            <DescriptionList>
              <DescriptionItem>
                <DescriptionTerm>
                  <a
                    className="font-serif text-lg font-bold underline text-link"
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
                    className="font-serif text-lg font-bold underline text-link"
                    href="https://fackforbund.github.io/"
                  >
                    Fackförbund
                  </a>
                </DescriptionTerm>
                <DescriptionDetails>
                  Sveriges fackförbund och deras kollektivavtal
                </DescriptionDetails>
              </DescriptionItem>

              <DescriptionItem>
                <DescriptionTerm>
                  <a
                    className="font-serif text-lg font-bold underline text-link"
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
                    className="font-serif text-lg font-bold underline text-link"
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
      </Main>
      <Footer
        sourceCode={["svenskamodellen/svenskamodellen.github.io", "svenskamodellen/components"]}
      />
    </Page>
  );
}
