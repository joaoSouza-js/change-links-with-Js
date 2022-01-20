let handleChangeUserLinks = {
    userAccounts: {
        youtube:"travisscott",
        instagram:"travisscott",
        twitter:"travisscott",
        facebook:"cactusjack"
    },
    formatLink(socialNetwork = string){
        return(`https://${socialNetwork}.com/${this.userAccounts[socialNetwork]}`);
    },

    execute(){
        for(li of socialLinks.children){
            const social = (li.getAttribute('class'))
            li.children[0].href = this.formatLink(social)
        }
    }
}
handleChangeUserLinks.execute()