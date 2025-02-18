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
  console.log(process.env.NEXT_PUBLIC_CANONICAL_URL);
  console.log(process.env.NEXT_PUBLIC_CANONICAL_URL!.length);
  console.log(process.env.NEXT_PUBLIC_DEPLOYMENT_URL);
  console.log(process.env.NEXT_PUBLIC_DEPLOYMENT_URL!.length);
  return (
    <Page>
      <HeaderMenu
        canonicalUrl={process.env.NEXT_PUBLIC_CANONICAL_URL!}
        deploymentUrl={process.env.NEXT_PUBLIC_DEPLOYMENT_URL!}
      />
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
            text="arbetsmarknad.github.io"
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
        sourceCode={[
          "arbetsmarknad/arbetsmarknad.github.io",
          "arbetsmarknad/components",
        ]}
      />
    </Page>
  );
}
