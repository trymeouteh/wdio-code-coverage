it('My Test', async () => {
	let filePath = 'file:///' + import.meta.dirname.slice(0, -6);
	filePath += '/src/page.html';

	await browser.url(filePath);

	const button = await $('#my-button');

	await button.click();

	await browser.pause(3000);
});
