import React from "react";
import styled from "styled-components";
const AzkarContainer = styled("div")`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  text-align: center;
  max-width: 100%;
`;
const TheHeader = styled("h4")`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
  border-bottom: 2px solid #e0f7fa;
  padding-bottom: 10px;
`;
const ZkrContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  padding: 10px;
  (max-width: 767px)
  {
  repeat(auto-fit, minmax(200px, 1fr))
  }
`;
const TheZekr = styled("div")`
  background-color: #e0f7fa;
  border: 1px solid #b2ebf2;
  border-radius: 8px;
  padding: 15px;
  font-size: 16px;
  color: #333;
  text-align: center;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  line-height: 1.5;
`;
export default function Azkar() {
  return (
    <AzkarContainer>
      <TheHeader>Azkar</TheHeader>
      <ZkrContainer>
        <TheZekr>
          اللهمَّ اجعلْ في قلبي نورًا، وفي لساني نورًا، وفي بصري نورًا، وفي سمعي
          نورًا، وعنْ يميني نورًا، وعنْ يساري نورًا، ومنْ فوقي نورًا، ومنْ تحتي
          نورًا، ومنْ أمامي نورًا، ومنْ خلفي نورًا، واجعلْ لي في نفسي نورًا،
          وأَعْظِمْ لي نورًا
        </TheZekr>
        <TheZekr>
          سُبحانَ ذي الجبَروتِ والملَكوتِ والكِبرياءِ والعَظَمةِ
        </TheZekr>
        <TheZekr>
          سُبحانَكَ اللَّهمَّ وبحَمدِكَ، وتبارَك اسمُكَ، وتعالى جَدُّكَ، ولا
          إلهَ غيرُكَ.
        </TheZekr>
        <TheZekr>
          إِنَّ أَحَبَّ الْكَلَامِ إِلَى اللهِ: سُبْحَانَ اللهِ وَبِحَمْدِهِ
        </TheZekr>
        <TheZekr>
          لا إلهَ إلَّا أنتَ سُبْحانَكَ، إنِّي كنتُ مِن الظالمينَ
        </TheZekr>
        <TheZekr>
          اللهمَّ إني أعوذُ بك أنْ أُشرِكَ بك و أنا أعلمُ ، و أستغفرُك لما لا
          أعلمُ
        </TheZekr>
        <TheZekr>
          اللَّهمَّ أنتَ ربِي ، لَا إلهَ إلَّا أنتَ ، خلَقْتَني وأَنَا عبدُكَ ،
          وأنا علَى عَهْدِكَ وَوَعْدِكَ ما استطعتُ ، أعوذُ بِكُ مِنْ شَرِّ ما
          صنعْتُ ، أبوءُ لكَ بنعمتِكَ عَلَيَّ ، وأبوءُ لَكَ بذنبي ، فاغفرْ لِي ،
          فَإِنَّه لَا يغفرُ الذنوبَ إلَّا أَنْتَ
        </TheZekr>
        <TheZekr>
          سبحانَكَ اللَّهمَّ وبحمدِكَ ، وتبارَكَ اسمُكَ ، وتعالى جدُّكَ ، ولا
          إلَهَ غيرُكَ
        </TheZekr>
      </ZkrContainer>
    </AzkarContainer>
  );
}
