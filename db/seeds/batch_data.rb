@user_emails = [
  'manager@perekrestok.com',
  'manager@karavaev_brothers.com',
  'manager@mcdonalds.com',
  'manager@french_bakery.com'
]

def create_batches
  create_batch(
    activation_start: 30.minutes.ago.change(usec: 0),
    activation_end: 30.minutes.since.change(usec: 0),
    company_name: 'Перекресток'
  )

  create_batch(
    activation_start: 1.hour.since.change(usec: 0),
    activation_end: 2.hours.since.change(usec: 0),
    company_name: 'Братья Караваевы',
  )

  create_batch(
    activation_start: 90.minutes.since.change(usec: 0),
    activation_end: 150.minutes.since.change(usec: 0),
    company_name: 'МакДоналдс',
  )

  create_batch(
    activation_start: 2.hours.since.change(usec: 0),
    activation_end: 4.hours.since.change(usec: 0),
    company_name: 'Французская пекарня',
  )
end
#
# def past_activation_data
#   {
#     start: Time.now - (11..20).to_a.sample.hours,
#     end: Time.now - (1..10).to_a.sample.hours
#   }
# end
#
# def earliest_activation_data
#   {
#     start: Time.now - (1..10).to_a.sample.hours,
#     end: Time.now + 1.hours
#   }
# end
#
# def early_activation_data
#   {
#     start: Time.now - (1..7).to_a.sample.hours,
#     end: Time.now + (1..3).to_a.sample.hours
#   }
# end
#
# def late_activation_data
#   {
#     start: Time.now - (1..5).to_a.sample.hours,
#     end: Time.now + (1..10).to_a.sample.hours
#   }
# end

def create_batch(activation_start:, activation_end:, company_name:)
  company = Company.find_by(company_name: company_name)

  Batch.create!(
    activation_start: activation_start,
    activation_end: activation_end,
    outlet_id: company.outlet_ids.first,
    discount: Batch.discounts.keys.sample
  )
end
