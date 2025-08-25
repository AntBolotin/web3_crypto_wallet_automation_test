Feature('Metamask');

Scenario('import wallet test', ({ I }) => {
    I.amOnPage('https://www.google.com/')
    I.wait(20)  // waiting for autorun metamask
    I.switchToNextTab();
    I.see('Добро пожаловать в MetaMask', '.welcome-page__header')
    I.click('Начало работы')
    I.see('Впервые в MetaMask?')
    I.click('Импорт кошелька')
    I.see('Помогите нам улучшить MetaMask')
    I.click('//button[@data-testid="page-container-footer-cancel"]')  //xpath example
    I.see('Импорт кошелька с помощью секретной фразы для восстановления')
    I.fill_key('phrase')
    I.fill_password('password2')
    I.click('input[id=create-new-vault__terms-checkbox]')
    I.click('//button[text()="Импорт"]')
    I.wait(5)
    I.see('Поздравляем')
    I.click('//button[text()="Все выполнено"]')
    I.see('ETH')

});

Scenario('add network test', ({ I }) => {

    I.amOnPage('https://www.google.com/')
    I.wait(20) 
    I.switchToNextTab();
    I.see('Добро пожаловать в MetaMask', '.welcome-page__header')
    I.click('Начало работы')
    I.see('Впервые в MetaMask?')
    I.click('Импорт кошелька')
    I.see('Помогите нам улучшить MetaMask')
    I.click('//button[@data-testid="page-container-footer-cancel"]')
    I.see('Импорт кошелька с помощью секретной фразы для восстановления')
    I.fill_key('phrase')
    I.fill_password('password')
    I.click('input[id=create-new-vault__terms-checkbox]')
    I.click('//button[text()="Импорт"]')
    I.wait(5)
    I.see('Поздравляем')
    I.click('//button[text()="Все выполнено"]')
    I.see('ETH')

    I.wait(2)
    I.waitForClickable('//button[@data-testid="popover-close"]', 10)
    I.click('//button[@data-testid="popover-close"]')
    I.click('//div[contains(@class, "network-display--clickable")]')
    I.waitForClickable('//button[text()="Добавить сеть"]', 5)
    I.click('//button[text()="Добавить сеть"]')
    I.see('Имя сети')
    I.fill_network('Mumbai', 'https://matic-mumbai.chainstacklabs.com', '80001', 'MATIC')
    I.wait(1)
    I.click('//button[text()="Сохранить"]')
    I.see('«Mumbai» успешно добавлен!')

});

Scenario('superdao auth test', async ({ I }) => {

    I.amOnPage('https://www.google.com/')
    I.wait(20) 
    I.switchToNextTab();
    I.see('Добро пожаловать в MetaMask', '.welcome-page__header')
    I.click('Начало работы')
    I.see('Впервые в MetaMask?')
    I.click('Импорт кошелька')
    I.see('Помогите нам улучшить MetaMask')
    I.click('//button[@data-testid="page-container-footer-cancel"]')
    I.see('Импорт кошелька с помощью секретной фразы для восстановления')
    I.fill_key('phrase')
    I.fill_password('password')
    I.click('input[id=create-new-vault__terms-checkbox]')
    I.click('//button[text()="Импорт"]')
    I.wait(5)
    I.see('Поздравляем')
    I.click('//button[text()="Все выполнено"]')
    I.see('ETH')

    I.amOnPage('https://app.superdao.co/auth/login')
    I.see('Connect your wallet')
    I.click('Metamask')
    I.switchToNextTab()
    I.waitForVisible('//div[@class="permissions-connect-header__title"]', 10)
    I.see('Подключиться с помощью MetaMask')
    I.click('//button[text()="Далее"]')
    I.see('Разрешить этому сайту:')
    I.click('//button[text()="Подключиться"]')

    I.wait(10)
    I.see('Запрос подписи')
    I.click('//button[text()="Подписать"]')
    I.wait(5)
    I.switchToNextTab(2)
    let url = await I.grabCurrentUrl();
    console.log(`Current URL is [${url}]`);
    I.see('DAOs')

});
