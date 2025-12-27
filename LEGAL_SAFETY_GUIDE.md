# Legal Safety Refactoring Guide

## Status: STEP 1/3 COMPLETED

✅ **Completed:**
- Created 4 new legal safety pages: `/metodika`, `/oprava-nepravd`, `/pravni-ramec`, `/rozpad-skody`
- Implemented classification badge system component
- Build successful: 45 pages

⏳ **Remaining Work:**
- Refactor all existing content (17 question pages + actor pages + other content)
- Add legal disclaimers to footer and pages
- Review and remove/anonymize personal data
- Update navigation
- Create comprehensive changelog

---

## 1. Risky Language Patterns - FIND & REPLACE

### ❌ ZAKÁZÁNO → ✅ NAHRADIT

| Zakázané | Bezpečná alternativa |
|----------|---------------------|
| ukradli / kradli | spolek eviduje nesoulad |
| podvod | spolek eviduje nesoulad |
| zpronevěra | podezření ze zpronevěry / věc je předmětem trestního řízení |
| zločin / trestný čin | věc je předmětem vyšetřování |
| mafiáni / gangsteři | [odstranit] |
| lháři / podvodníci | [odstranit] |
| vědomě / schválně / záměrně | z dokumentů vyplývá / k datu X nebylo doloženo |
| pokusili se ukrást | spolek neeviduje doložení |
| znemožnili / sabotovali | došlo k / vznikl následek |
| ignorovali zákon | k datu X nebylo doloženo plnění povinnosti |

### Safe Formulation Patterns (12 ukázkových formulací)

1. **"Spolek eviduje..."**
   - Example: "Spolek eviduje nesoulad mezi vybrát ými a odvedenými příspěvky."

2. **"Z účetních podkladů za období ... vyplývá..."**
   - Example: "Z účetních podkladů za období 2021-2024 vyplývá, že příspěvky nebyly zaúčtovány."

3. **"K datu ... spolek neeviduje doložení..."**
   - Example: "K datu 31.12.2023 spolek neeviduje doložení předání seznamů členů."

4. **"V této věci existuje rozdílné tvrzení; stav označujeme jako spor."**
   - Example: "Druhá strana tvrdí, že seznamy byly předány. Věc označujeme jako spor."

5. **"Uvedená částka je součtem položek ... (metodika zde)."**
   - Example: "Uvedená částka 1.214.400 Kč je součtem oddílových příspěvků za období 2021-2024 (viz metodika)."

6. **"Nejde o soudní rozhodnutí; jde o věcné shrnutí podkladů."**
   - Example: "Tento údaj není pravomocným soudním rozhodnutím, jde o shrnutí účetních podkladů."

7. **"Uvádíme pouze informace vztahující se k výkonu funkce ve spolku."**
   - Example: "Osoba je uvedena výhradně v souvislosti s výkonem funkce předsedy oddílu."

8. **"Osobní údaje nejsou zveřejněny; případné dokumenty jsou anonymizované."**
   - Example: "Na webu nejsou zveřejněna rodná čísla, adresy ani kontakty."

9. **"Pokud máte podloženou námitku, zašlete ji na kontakt..."**
   - Example: "Námitky k uvedeným údajům zašlete na e-mail uvedený v sekci Právní rámec."

10. **"Po prověření provedeme opravu/doplnění."**
    - Example: "Oprávněné námitky budou po prověření zapracovány do 14 dnů."

11. **"Tvrzení označená jako Doloženo mají oporu v dokumentu typu..."**
    - Example: "Status DOLOŽENO znamená, že existuje konkrétní dokument (faktura, smlouva, zápis)."

12. **"Tvrzení označená jako Evidováno vychází z interní evidence spolku."**
    - Example: "Status EVIDOVÁNO znamená, že údaj je založen na účetní evidenci spolku."

---

## 2. Example Refactoring: Before/After

### BEFORE (Risky):
```tsx
<p>
  Vaniš a Pivoňka ukradli přes 500.000 Kč a vědomě porušili zákon.
  Jsou to podvodníci, kteří chtěli zničit spolek.
</p>
```

### AFTER (Safe):
```tsx
<p>
  Spolek eviduje nesoulad ve výši 566.400 Kč mezi příspěvky vybranými předsedou
  oddílu a příspěvky odvedenými spolku za období 2021-2024.
  <ClassificationBadge type="evidovano" className="ml-2" />
</p>
<p className="text-sm text-slate-600 mt-2">
  Podklad: účetní evidence TJ Krupka, výpověď při výslechu (2024).
  Věc je předmětem trestního řízení.
</p>
```

---

## 3. Structure for Refactored Content

Every factual claim must have:

```tsx
<div className="p-4 rounded-lg border-2 bg-green-50 border-green-300">
  {/* 1. FAKT - co se stalo */}
  <div className="mb-2">
    <h3 className="font-semibold">Událost/tvrzení</h3>
    <ClassificationBadge type="dolozeno" />
  </div>

  {/* 2. DATUM/OBDOBÍ */}
  <p className="text-sm">
    Datum: 24.8.2021
  </p>

  {/* 3. DOPAD */}
  <p className="text-sm">
    Částka: 566.400 Kč
  </p>

  {/* 4. PODKLADY */}
  <div className="mt-3 pt-3 border-t">
    <p className="text-xs font-semibold">Podklady:</p>
    <ul className="text-xs">
      <li>📎 Účetní kniha TJ Krupka (2021-2024)</li>
      <li>📎 Výpověď při výslechu (2024)</li>
    </ul>
  </div>
</div>
```

---

## 4. Actor Pages - Decision Needed

**Option A (nejbezpečnější):**
- Remove `/akteri` page entirely
- Replace with roles: "bývalý člen výboru", "předseda oddílu"

**Option B (střední riziko, použitelné):**
- Keep names only for persons acting in official capacity
- Add disclaimer: "uvádíme výhradně v souvislosti s výkonem funkce"
- Remove all evaluative statements
- Only link to events and documents

**Recommendation:** Option B with heavy refactoring

---

## 5. GDPR Checklist - What to Remove

### ❌ Must NOT be on website:
- [ ] Rodná čísla
- [ ] Adresy (bydliště)
- [ ] Telefonní čísla
- [ ] E-maily (kromě oficiálního kontaktu spolku)
- [ ] Čísla bankovních účtů
- [ ] Podpisy (skeny)
- [ ] SPZ vozidel
- [ ] Plné texty osobní korespondence

### ✅ Can be on website:
- [x] Jména osob ve funkci (s disclaimerem)
- [x] Funkční role (předseda, člen výboru)
- [x] Typy dokumentů (faktura, smlouva, zápis)
- [x] Data událostí
- [x] Částky (bez osobních údajů)

---

## 6. Required Changes by Page Category

### Question Pages (17 pages)
- [x] `/otazky/byly-schuze-legitimni` - NEEDS REFACTORING
- [x] `/otazky/co-dnes-vime-s-jistotou` - NEEDS REFACTORING
// - [x] `/otazky/co-zustava-nejasne` - NEEDS REFACTORING
- [x] `/otazky/jaka-byla-role-mesta` - NEEDS REFACTORING
- [x] `/otazky/jednal-predseda-v-souladu-se-zakonem` - NEEDS REFACTORING
- [x] `/otazky/jsou-rozhodnuti-platna` - NEEDS REFACTORING
- [x] `/otazky/kdo-je-clenem-spolku` - NEEDS REFACTORING
- [x] `/otazky/kdo-mel-pravo-rozhodovat` - NEEDS REFACTORING
- [x] `/otazky/kdo-mel-vest-clenskou-evidenci` - NEEDS REFACTORING
- [x] `/otazky/kdo-nakladal-s-prispevky` - NEEDS REFACTORING
- [x] `/otazky/mely-instituce-zasahnout-drive` - NEEDS REFACTORING
- [x] `/otazky/odpovednost-za-sverene-ukoly` - NEEDS REFACTORING
- [x] `/otazky/pristup-k-financim-spolku` - NEEDS REFACTORING
- [x] `/otazky/proc-je-kauza-slozita` - NEEDS REFACTORING
- [x] `/otazky/vznikla-spolku-financni-ujma` - NEEDS REFACTORING

### Actor Pages (10 pages)
- [ ] `/akteri` - DECIDE: Remove or refactor?
- [ ] `/akteri/gustav-vlach` - DECIDE: Remove or refactor?
- [ ] `/akteri/jan-bokoc` - DECIDE: Remove or refactor?
- [ ] `/akteri/jan-kuzma` - DECIDE: Remove or refactor?
- [ ] `/akteri/jaromir-pivonka` - DECIDE: Remove or refactor?
- [ ] `/akteri/jitka-illesova` - DECIDE: Remove or refactor?
- [ ] `/akteri/marek-vanis` - DECIDE: Remove or refactor?
- [ ] `/akteri/martin-kulik` - DECIDE: Remove or refactor?
- [ ] `/akteri/miroslav-brozek` - DECIDE: Remove or refactor?
- [ ] `/akteri/tomas-syrycansky` - DECIDE: Remove or refactor?

### Other Pages
- [ ] `/prehled` - Review and refactor
- [ ] `/detailni-analyza` - Review and refactor
- [ ] `/udalosti` - Review and refactor
- [ ] `/temata` - Review and refactor
- [ ] `/cisla` - Review and refactor
- [ ] Footer - Add legal disclaimer

---

## 7. Navigation Updates Needed

Add new pages to main navigation or appropriate sections:
- "Metodika a zdroje" → Link from footer + legal section
- "Oprava nepravd" → Link from main nav or legal section
- "Právní rámec" → Link in footer
- "Rozpad škody" → Link from "Čísla" page

---

## 8. Estimated Refactoring Scope

### High Priority (Critical for legal safety):
1. ✅ Create new legal pages (DONE)
2. ⏳ Refactor 17 question pages (remove risky language)
3. ⏳ Decide on actor pages (remove or heavy refactoring)
4. ⏳ Add legal disclaimers to footer
5. ⏳ GDPR review of all content

### Medium Priority:
6. ⏳ Update navigation with new pages
7. ⏳ Refactor other content pages
8. ⏳ Add classification badges throughout

### Low Priority:
9. ⏳ Create comprehensive changelog
10. ⏳ Documentation for future content guidelines

---

## 9. Next Steps

Given the scope of work remaining, recommend:

1. **Immediate:** Review this guide and approve approach
2. **Phase 2:** Refactor high-risk content (question pages, actor decision)
3. **Phase 3:** Complete remaining refactoring, testing, and documentation

**Time estimate:**
- Phase 2: ~2-3 hours of refactoring work
- Phase 3: ~1-2 hours of polishing and documentation

**Recommendation:** Proceed incrementally, test at each phase, commit frequently.

---

## 10. Contact & Sign-off

This refactoring is designed to:
- ✅ Minimize risk of defamation / personal rights violations
- ✅ Ensure GDPR compliance
- ✅ Establish factual, defensive tone
- ✅ Support claims with documented evidence
- ✅ Provide transparent methodology
- ✅ Allow for corrections and objections

All changes preserve factual accuracy while removing unnecessary legal risk.
