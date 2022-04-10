class Test
{

    private button: HTMLButtonElement;

    public constructor(button: HTMLButtonElement)
    {
        this.button = button;
        this.button.addEventListener("click", () => {
            this.alert();
        });
    }

    private alert(message: string = "click"): void
    {
        window.alert(message);
    }

}
