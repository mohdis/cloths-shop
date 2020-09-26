export const addItemToListItem = (listItem, newItem) => {
  const itemExisted = listItem.find((item) => item.id === newItem.id)

  if (itemExisted) {
    return listItem.map((item) => {
      if (item.id === newItem.id) {
        return { ...item, quantity: item.quantity + 1 }
      }

      return item
    })
  }
  return [...listItem, { ...newItem, quantity: 1 }]
}

export const addOneQuantityItem = (items, addedItem) => {
  return items.map((item) => {
    if (item.id === addedItem.id) {
      // addedItem.quantity = addedItem.quantity + 1  // these two line don't work
      // return addedItem
      return { ...item, quantity: item.quantity + 1 }
    } else {
      return item
    }
  })
}
export const removeOneQuantityItem = (items, remvedItem) => {
  const findedItem = items.find((items) => items.id === remvedItem.id)

  if (findedItem.quantity === 1) {
    return items.filter((item) => item.id !== findedItem.id)
  } else {
    return items.map((item) =>
      item.id === findedItem.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  }
}
