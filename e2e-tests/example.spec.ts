import { test, expect } from '@playwright/test';

test('test_types_qcm', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'QCM' }).click();
  await expect(page.getByRole('heading', { name: 'Types de QCM' })).toBeVisible();

});

test('test_image', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Entreprises' }).click();
  await expect(page.locator('div').filter({ hasText: /^Mécanique des fluides$/ }).getByRole('img')).toBeVisible();
});


test('test_entreprises_meca_flux', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Entreprises' }).click();
  await page.getByRole('button', { name: 'Mécanique', exact: true }).click();
  await expect(page.getByText('Abylsen')).toHaveText('Abylsen');
  await expect(page.getByText('framatome')).toHaveText('framatome');
  await expect(page.getByRole('heading', { name: 'Liste des entreprises en mé' })).toBeVisible();
});

test('test_connexion_inscr_elts', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Connexion', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Connexion' })).toHaveText('Connexion');
  await expect(page.getByRole('button', { name: 'Connexion' })).toBeVisible();
  await page.getByRole('button', { name: 'Inscription' }).click();
  await expect(page.locator('div').filter({ hasText: /^Masculin$/ }).getByRole('radio')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Féminin$/ }).getByRole('radio')).toBeVisible();
  await page.locator('div').filter({ hasText: /^Féminin$/ }).getByRole('radio').click();
  await expect(page.locator('div').filter({ hasText: /^Féminin$/ }).getByRole('radio')).toBeChecked();
  await expect(page.getByText('Mot de passe* :', { exact: true })).toBeEditable();
  await expect(page.getByText('Répéter mot de passe* :')).toBeEditable();
});

test('test_accueil', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByText('Non connecté')).toHaveText('Non connecté');
  await expect(page.locator('div').filter({ hasText: /^Non connecté$/ }).locator('div')).toHaveCSS('width','15px');
  await expect(page.getByRole('heading', { name: 'CV de compétences' })).toHaveText('CV de compétences');
  await expect(page.getByRole('img')).toBeVisible();
  await expect(page.getByText('Répondez à un QCM pour télé')).toHaveText('Répondez à un QCM pour télécharger un CV de compétences');
  await expect(page.locator('.strait_green')).toBeVisible();
});

test('test_light_types_qcm', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'QCM' }).click();
  const color = "rgb(236, 59, 59)"
  await expect(page.locator('.light_off')).toHaveCSS('background-color', color);
});