import FullPage, {
  FullPageSections,
  FullpageNavigation,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import React from "react";

function FullPageScroll() {
  const SectionStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  };

  const homeDesktopUrl = "https://company.nexon.com/videos/home-desktop.mp4";
  const companyBackgroundDesktopUrl =
    "https://company.nexon.com/videos/company-background-desktop.mp4";
  const businessBackgroundDesktopUrl =
    "https://company.nexon.com/videos/business-background-desktop-02.mp4";
  return (
    <FullPage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection
          style={{
            ...SectionStyle,
          }}
        >
          <video
            muted
            autoPlay
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              zIndex: 1,
            }}
          >
            <source src={homeDesktopUrl} type='video/mp4' />
          </video>
          <span style={{ position: "absolute", zIndex: 2 }}>
            <h1 style={{ color: "yellow" }}>Screen1</h1>
          </span>
        </FullpageSection>
        <FullpageSection
          style={{
            ...SectionStyle,
          }}
        >
          <video
            muted
            autoPlay
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              zIndex: 1,
            }}
          >
            <source src={companyBackgroundDesktopUrl} type='video/mp4' />
          </video>
          <span style={{ position: "absolute", zIndex: 2 }}>
            <h1 style={{ color: "yellow" }}>Screen2</h1>
          </span>
        </FullpageSection>
        <FullpageSection
          style={{
            ...SectionStyle,
          }}
        >
          <video
            muted
            autoPlay
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              zIndex: 1,
            }}
          >
            <source src={businessBackgroundDesktopUrl} type='video/mp4' />
          </video>
          <span style={{ position: "absolute", zIndex: 2 }}>
            <h1 style={{ color: "yellow" }}>Screen3</h1>
          </span>
        </FullpageSection>
        <FullpageSection>
          <div style={{ color: "black" }}>
            <span>
              <h1>PEOPLE</h1>
            </span>
            <div>
              <p>더보기</p>
              <input type='button' value='=>' />
            </div>
            <span>
              <p>도전과 변화를 즐기는 모험가들이 재미의 진화를 이끌어갑니다.</p>
            </span>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div style={{ color: "black" }}>
            <span>
              <h1>NEWS</h1>
            </span>
            <div>
              <p>더보기</p>
              <input type='button' value='=>' />
            </div>
            <span>
              <p>가로 스크롤</p>
            </span>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div style={{ color: "black" }}>
            <span>
              <h1>CSR</h1>
            </span>
            <div>
              <p>더보기</p>
              <input type='button' value='=>' />
            </div>
            <span>
              <p>게임으로 더 재미있고 더 따뜻한 세상을 만듭니다.</p>
              <p>
                우리의 미래세대가 건강하게 꿈을 키워나갈 수 있도록 잠재된
                창의성을 일꺠우고 지원합니다.
              </p>
            </span>
          </div>
        </FullpageSection>
      </FullPageSections>
    </FullPage>
  );
}

export default FullPageScroll;
