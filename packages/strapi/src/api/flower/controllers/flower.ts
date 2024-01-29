/**
 * flower controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::flower.flower', ({ strapi }) => ({
   async findOne(ctx) {
     const { id } = ctx.params
     const entity = await strapi.db.query('api::flower.flower').findOne({
       where: { slug: id },
       populate: ['image', 'tag'],
     })
     const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
     return this.transformResponse(sanitizedEntity)
   }
 }));