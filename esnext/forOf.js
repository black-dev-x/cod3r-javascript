const letras = "abcdefghijlmnopqrstuvxz"

for(let algo of letras){
    switch(algo){
        case 'g':
            console.log('L')
            break;
        case 'b':
            console.log('S')
            break;
        case 'a': case 'h':
            console.log('Y')
            break; 
        case 'i':
            console.log('N')
            break;
        case 'j':
            console.log('H')
            break;
        case 'd':
            console.log(' ')
            break;
        case 'c': case 'f': case 'l':
            console.log('A')
            break;
        case 'e':
            console.log('G')
            break;
        default:
            return;
    }
}