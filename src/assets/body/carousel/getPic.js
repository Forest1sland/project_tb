const data = []

const files = require.context('@/assets/body/carousel', false, /.jpg$/).keys();

for (let i = 1; i <= files.length; i++) {
    data.push({ id: i, src: require('@/assets/body/carousel/' + i + '.jpg') })
}

export default data