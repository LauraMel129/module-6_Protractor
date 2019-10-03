'use strict';
const EC = protractor.ExpectedConditions;

const epamLogo = element(by.className("app-logo"));
const activityCategory = element(by.className("active-category"));
const globalMenu = element(by.id("global_menu_toggle"));

const week = element(by.className("uui-caption _14hb7 _1Tyuz _28Nyy"));
const twoWeeks = element(by.className("uui-caption _14hb7 _1Tyuz _28Nyy"));
const month = element(by.className("uui-caption _14hb7 _1Tyuz _28Nyy"));

const calendarHeader = element(by.css("div.JournalHeader_header-title__W-XRI"));
const projectName = element(by.cssContainingText(".JournalHeader_header-title__W-XRI", Activities));
const workingHours = element(by.xpath(".//div[@class='CalendarSubheaderLeftContainer_subheader-left-container__ylj74']"));

const date = element(by.cssContainingText(".uui-caption _14hb7 _1Tyuz _3nLHU", Today));
const addTask = element(by.className("TaskName_add-activity-action__1R0En"));
const inputTask = element(by.css("input.ActivityName_activity-name-input__95T_F"));

const dateValue = element(by.className("date-value"));
const taskName = element.all(by.className("journalСommon_journal-row__38ov_ CalendarRow_calendar-row__3LInm")).get(0);

describe('EPAM Time page', () => {

    it('should have a title', (done) => {
        browser.get('https://time.epam.com')
            .then(() => expect(browser.getTitle()).toEqual('Time'))
            .finally(done);
    });

    it('should be loaded', (done) => {
        browser.wait(EC.visibilityOf(epamLogo))
            .then(() => browser.wait(EC.visibilityOf(activityCategory)))
            .then(() => {
                expect(epamLogo.isDisplayed).toBeTruthy();
                expect(activityCategory.isDisplayed).toBeTruthy();
            })
            .finally(done);
    });

    it('should allow to add new task', (done) => {
        addTask.click()
            .then(() => browser.wait(EC.visibilityOf(inputTask)))
            .then(() => taskName.sendKeys("Mentoring task"))
            .finally(done);
    });

    it('check the text', function () {
        week.click()
            .then(() => {
                expect(dateValue.gettext()).toEqual('Sep 30 - Oct 6');
                expect(date.getText()).toEqual('Today');
            })

    });

});