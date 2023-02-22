const useClickHandler = () => {

    function clickHandler(url?: string) {
        const URL = url
        if (typeof window !== 'undefined') {
            window.open(URL, '_blank')
        } else {
            const URL = 'mailto:' + 'rtonycloud@gmail.com'
            if (typeof window !== 'undefined') {
                open(URL, '_blank')
            }
        }
        return null
    }
    return {clickHandler}
}

export default useClickHandler
