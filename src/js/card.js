import data from '../../data/db.json'

const imagesInfo = data.images

//create card group
export const cardGroup= document.createElement('div')
// 用export可以把在别的js模块创建的数据一会用import在别的js模块里用

cardGroup.classList.add('cardGroup')
// 用.classList.add('')添加class

//function: create card
function createCard(imageInfo){
  const cardDom=document.createElement('div') 
  cardDom.classList.add('card')
  cardDom.style.backgroundImage = `url(${imageInfo.address})`
  return cardDom
}

//create card
imagesInfo.forEach(imageInfo=>{
  const cardDom=createCard(imageInfo)
  cardGroup.append(cardDom)
});

