import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://bahiana.cwww.dev/
  await page.goto('https://bahiana.cwww.dev/');

  // Click text=Fomento para Pesquisa >> nth=1
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.bahiana.edu.br/fomento-para-pesquisa/' }*/),
    page.locator('text=Fomento para Pesquisa').nth(1).click()
  ]);

  // Click header >> text=Graduação >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.bahiana.edu.br/cursos/graduacao/' }*/),
    page.locator('header >> text=Graduação').first().click()
  ]);

  // Click a:nth-child(5) .content p
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.bahiana.edu.br/cursos/graduacao/medicina/' }*/),
    page.locator('a:nth-child(5) .content p').click()
  ]);

  // Click header >> text=Secretarias
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.bahiana.edu.br/secretarias/' }*/),
    page.locator('header >> text=Secretarias').click()
  ]);

  // Click a:has-text("Secretarias de Pós-Graduação, Pesquisa e Inovação")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.bahiana.edu.br/secretarias-de-pos-graduacao-pesquisa-e-inovacao/' }*/),
    page.locator('a:has-text("Secretarias de Pós-Graduação, Pesquisa e Inovação")').click()
  ]);

  // Click text=Secretarias Acadêmicas
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.bahiana.edu.br/secretarias-academicas-de-graduacao/' }*/),
    page.locator('text=Secretarias Acadêmicas').click()
  ]);

  // Click header >> text=Laboratórios de Pesquisa
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.bahiana.edu.br/laboratorios-de-pesquisa/' }*/),
    page.locator('header >> text=Laboratórios de Pesquisa').click()
  ]);

  // Click .css-1k0hmue-IconWrapper
  await page.locator('.css-1k0hmue-IconWrapper').click();

  // Click [placeholder="Buscar"]
  await page.locator('[placeholder="Buscar"]').click();

  // Fill [placeholder="Buscar"]
  await page.locator('[placeholder="Buscar"]').fill('medicina');

  // Click li:has-text("VER TODAS AS APARIÇÕES")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.bahiana.edu.br/resultados/?Busca=%22medicina%22' }*/),
    page.locator('li:has-text("VER TODAS AS APARIÇÕES")').click()
  ]);

  // Click text=PROSEF 2014.2 - Medicina - GABARITO
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.waitForNavigation(/*{ url: 'https://www.bahiana.edu.br/noticia/8485/prosef-2014-2-medicina-gabarito/' }*/),
    page.locator('text=PROSEF 2014.2 - Medicina - GABARITO').click()
  ]);

  // Click img[alt="Escola Bahiana de Medicina e Saude Pública"] >> nth=0
  await page1.locator('img[alt="Escola Bahiana de Medicina e Saude Pública"]').first().click();
  await expect(page1).toHaveURL('https://www.bahiana.edu.br/');

  // Click button:has-text("Next")
  await page1.locator('button:has-text("Next")').click();

  // Click button:has-text("Next")
  await page1.locator('button:has-text("Next")').click();

  // Click text=Maio2022HojeSTQQSSD252627282930Mai1Feriado 01/0523456789101112131415161718192021 >> [aria-label="Next page"]
  await page1.locator('text=Maio2022HojeSTQQSSD252627282930Mai1Feriado 01/0523456789101112131415161718192021 >> [aria-label="Next page"]').click();

  // Click text=Junho2022Hoje >> [aria-label="Next page"]
  await page1.locator('text=Junho2022Hoje >> [aria-label="Next page"]').click();

  // Click text=ArtigosConcepções de profissionais dos Centros de Atenção Psicossocial sobre pro >> a >> nth=3
  const [page2] = await Promise.all([
    page1.waitForEvent('popup'),
    page1.locator('text=ArtigosConcepções de profissionais dos Centros de Atenção Psicossocial sobre pro >> a').nth(3).click()
  ]);

  // Click img[alt="Escola Bahiana de Medicina e Saude Pública"] >> nth=0
  await page.locator('img[alt="Escola Bahiana de Medicina e Saude Pública"]').first().click();
  await expect(page).toHaveURL('https://www.bahiana.edu.br/');

  // Click text=Pesquisa e InovaçãoBahiana lança periódico científico com enfoque inovador na ár >> a >> nth=3
  const [page3] = await Promise.all([
    page.waitForEvent('popup'),
    page.waitForNavigation(/*{ url: 'https://www.bahiana.edu.br/noticias/pesquisa%20e%20inovacao/' }*/),
    page.locator('text=Pesquisa e InovaçãoBahiana lança periódico científico com enfoque inovador na ár >> a').nth(3).click()
  ]);

  // Click text=123 >> a >> nth=2
  await Promise.all([
    page3.waitForNavigation(/*{ url: 'https://www.bahiana.edu.br/noticias/pesquisa%20e%20inovacao/pagina/3/' }*/),
    page3.locator('text=123 >> a').nth(2).click()
  ]);

  // Click img[alt="Escola Bahiana de Medicina e Saude Pública"] >> nth=0
  await page3.locator('img[alt="Escola Bahiana de Medicina e Saude Pública"]').first().click();
  await expect(page3).toHaveURL('https://www.bahiana.edu.br/');

  // Click img[alt="Centro de Práticas Integrativas e Complementares da Bahiana \(CEPICS\)"]
  await Promise.all([
    page3.waitForNavigation(/*{ url: 'https://www.bahiana.edu.br/noticia/33504/centro-de-praticas-integrativas-e-complementares-da-bahiana-(cepics)/' }*/),
    page3.locator('img[alt="Centro de Práticas Integrativas e Complementares da Bahiana \\(CEPICS\\)"]').click()
  ]);

  // Click img[alt="Escola Bahiana de Medicina e Saude Pública"] >> nth=0
  await page3.locator('img[alt="Escola Bahiana de Medicina e Saude Pública"]').first().click();
  await expect(page3).toHaveURL('https://www.bahiana.edu.br/');

  // Click text=library_booksPós-graduação
  await Promise.all([
    page3.waitForNavigation(/*{ url: 'https://www.bahiana.edu.br/pos-graduacao/' }*/),
    page3.locator('text=library_booksPós-graduação').click()
  ]);

  // Click img[alt="Escola Bahiana de Medicina e Saude Pública"] >> nth=0
  await page3.locator('img[alt="Escola Bahiana de Medicina e Saude Pública"]').first().click();
  await expect(page3).toHaveURL('https://www.bahiana.edu.br/');

  // Click text=computerEAD
  await Promise.all([
    page3.waitForNavigation(/*{ url: 'https://www.bahiana.edu.br/cursos/ead/informatica-em-saude/' }*/),
    page3.locator('text=computerEAD').click()
  ]);

  // Click text=Fale conosco
  const [page4] = await Promise.all([
    page3.waitForEvent('popup'),
    page3.waitForNavigation(/*{ url: 'https://www.bahiana.edu.br/contato/' }*/),
    page3.locator('text=Fale conosco').click()
  ]);

  // Click text=PTENES >> img[alt="Traducir al Español"]
  await Promise.all([
    page4.waitForNavigation(/*{ url: 'https://es.bahiana.edu.br/contato/' }*/),
    page4.locator('text=PTENES >> img[alt="Traducir al Español"]').click()
  ]);

});