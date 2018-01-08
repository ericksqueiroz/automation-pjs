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
  	browser.element(by.id('cepLocatario')).sendKeys('60150160');
  	// element(by.id('nomeLocatario')).sendKeys('João das Neves');
   //  element(by.id('cpfLocatario')).sendKeys('10020030088');
   //  element(by.id('nascimentoLocatario')).sendKeys('13051993');
   //  element(by.id('ctl00_ctl55_g_df0cb8df_1a38_4df9_afef_7ff89dfeb87c_ddlProfissaoLocatario')).$('[value="126"]').click();
   //  element(by.id('ddlRendaIndividualLocatario')).$('[value="4"]').click();
   //  element(by.id('ddlRendaFamiliarLocatario')).$('[value="5"]').click();
   //  element(by.id('ddlEstadoCivilLocatario')).$('[value="1"]').click();
   //  element(by.id('ctl00_ctl55_g_df0cb8df_1a38_4df9_afef_7ff89dfeb87c_ddlSexoLocatario')).$('[value="M"]').click();
   	
    browser.actions().keyDown(TAB).keyUp(TAB).perform();
    browser.pause(2000);
  });
});