export const transformAwardMetaObjects = (award) => {
  return {
    ...award,
    name: award.fields.find(field => field.key === 'title')?.value,
    image: award.fields.find(field => field.key === 'image')?.reference?.image?.url
  }
}