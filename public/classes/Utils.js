class Utils {

    static mostra2Digitos (num) {
        return num.toString().padStart(2, '0');
      }

    static dateFormat (date) {
        return (
            [
                Utils.mostra2Digitos(date.getDate()),
                Utils.mostra2Digitos(date.getMonth() + 1),
                date.getFullYear(),
            ].join('/') + ' ' +
            [
                Utils.mostra2Digitos(date.getHours()),
                Utils.mostra2Digitos(date.getMinutes()),
            ].join(':')
          );
    }
}