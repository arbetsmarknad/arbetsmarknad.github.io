import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@arbetsmarknad/components/Breadcrumb";
import { Container } from "@arbetsmarknad/components/Container";
import { Footer } from "@arbetsmarknad/components/Footer";
import { HeaderMenu } from "@arbetsmarknad/components/HeaderMenu";
import { Main } from "@arbetsmarknad/components/Main";
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
  const canonicalUrl = process.env.NEXT_PUBLIC_CANONICAL_URL!;
  const deploymentUrl = process.env.NEXT_PUBLIC_DEPLOYMENT_URL!;
  const canonicalHostname = new URL(canonicalUrl).hostname;
  return (
    <Page>
      <HeaderMenu canonicalUrl={canonicalUrl} deploymentUrl={deploymentUrl} />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Arbetsmarknad</BreadcrumbLink>
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
                    href="https://arbetsmiljo.codeberg.page/"
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
                    href="https://kollektivavtal.codeberg.page/"
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
                    href="https://lagstiftning.codeberg.page/"
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
        sourceCode={[
          "arbetsmarknad/arbetsmarknad.github.io",
          "arbetsmarknad/components",
        ]}
      />
    </Page>
  );
}
