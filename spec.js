// spec.js
describe('Fluxo de Compras - Captorcedor', function() {
  it('Captorcedor - Passo 1', function() {
    browser.
    get('http://fluxodecompradev.caixaseguros.intranet/Paginas/Captorcedor.aspx');
    element(by.id('btnAvancarPasso2Novo')).click();
    expect(element(by.className('dadosTitulo')).getText()).
    	toBe('IDENTIFICAÇÃO DO CLIENTE');
  });

  it('Captorcedor - Passo 2', function() {
  	browser.
  	element(by.id('nomeLocatario')).sendKeys('João das Neves');
    element(by.id('cpfLocatario')).sendKeys('10020030088');
    element(by.id('nascimentoLocatario')).sendKeys('13051993');
    element(by.id('ctl00_ctl55_g_df0cb8df_1a38_4df9_afef_7ff89dfeb87c_ddlProfissaoLocatario')).$('[value="126"]').click();
    element(by.id('ddlRendaIndividualLocatario')).$('[value="4"]').click();
    element(by.id('ddlRendaFamiliarLocatario')).$('[value="5"]').click();
    element(by.id('ddlEstadoCivilLocatario')).$('[value="1"]').click();
    element(by.id('ctl00_ctl55_g_df0cb8df_1a38_4df9_afef_7ff89dfeb87c_ddlSexoLocatario')).$('[value="M"]').click();
    element(by.id('cepLocatario')).sendKeys('60150160');
   	browser.actions().sendKeys(protractor.Key.TAB).perform();
    element(by.id('complementoLocatario')).sendKeys('Apartamento 25');
    element(by.id('dddCelularLocatario')).sendKeys('85');
    element(by.id('telefoneCelularLocatario')).sendKeys('986864545');
    element(by.id('emailFisicaLocatario')).sendKeys('testqa@outlook.com.br');
    element(by.id('rbDesejaReceberCelularNao')).click();
    element(by.id('rbDesejaReceberEmailNao')).click();
    element(by.id('btnAvancarPasso3Novo')).click();
    expect(element(by.className('pDebitoConta')).getText()).
    	toBe('Débito em conta');
    browser.pause(5000);
  });

  // it('Captorcedor - Passo 3', function() {

  // });
});