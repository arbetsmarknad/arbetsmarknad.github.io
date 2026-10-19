import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@svenskamodellen/components/Breadcrumb";
import { Container } from "@svenskamodellen/components/Container";
import { Footer } from "@svenskamodellen/components/Footer";
import { HeaderMenu } from "@svenskamodellen/components/HeaderMenu";
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
  const canonicalUrl = process.env.NEXT_PUBLIC_CANONICAL_URL!;
  const deploymentUrl = process.env.NEXT_PUBLIC_DEPLOYMENT_URL!;
  const canonicalHostname = new URL(canonicalUrl).hostname;
  return (
    <Page>
      <HeaderMenu canonicalUrl={canonicalUrl} deploymentUrl={deploymentUrl} />
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
        <Container className="flex flex-col items-start gap-y-12 prose">
          <TopLevelHeading
            text={canonicalHostname}
            subtext="Ett dokumentationsnav om den svenska arbetmarknaden"
          />
          <Section>
            <SectionHeading>Sektioner</SectionHeading>
            <DescriptionList>
              <DescriptionItem>
                <DescriptionTerm>
                  <a
                    className="font-bold underline text-link"
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
                    className="font-bold underline text-link"
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
                    className="font-bold underline text-link"
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
