"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createInvoice } from "@/lib/actions/createInvoice"

const paymentMethods = [
  { label: "Gotówka", value: "gotówka" },
  { label: "Przelew", value: "przelew" },
  { label: "Karta", value: "karta" },
] as const
const status = [
  { label: "Zapłacona", value: "zapłacona" },
  { label: "Niezapłacona", value: "niezapłacona" },
] as const

const formSchema = z.object({
  seller: z
    .string()
    .min(5, "Sprzedawca musi zawierać co najmniej 5 znaków.")
    .max(32, "Sprzedawca musi zawierać co najwyżej 32 znaki."),
  sellerAddress: z
    .string()
    .min(5, "Adres sprzedawcy musi zawierać co najmniej 5 znaków.")
    .max(32, "Adres sprzedawcy musi zawierać co najwyżej 32 znaki."),
  nip: z
    .string()
    .min(10, "NIP musi zawierać co najmniej 10 znaków.")
    .max(12, "NIP musi zawierać co najwyżej 12 znaków."),
  number: z
    .string()
    .min(5, "Numer musi zawierać co najmniej 5 znaków.")
    .max(32, "Numer musi zawierać co najwyżej 32 znaków."),
  date: z.date(),
  name: z
    .string()
    .min(20, "Opis musi zawierać co najmniej 10 znaków.")
    .max(100, "Opis musi zawierać co najwyżej 100 znaków."),
  amount: z.string().min(1, "Kwota musi być większa niż 0."),
  ptu: z.string().min(1, "PTU musi być większa niż 0."),
  paymentMethod: z
    .string()
    .min(5, "Metoda płatności musi zawierać co najmniej 5 znaków."),
  status: z.string().min(5, "Status musi zawierać co najmniej 5 znaków."),
  paymentDate: z.date(),
})

const AddInvoiceForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      seller: "",
      sellerAddress: "",
      nip: "",
      number: "",
      date: new Date(),
      name: "",
      amount: "",
      ptu: "",
      paymentMethod: "",
      status: "",
      paymentDate: new Date(),
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const payload = {
      ...data,
      date: data.date.toISOString(),
      paymentDate: data.paymentDate.toISOString(),
      amount: parseFloat(data.amount),
      ptu: parseFloat(data.ptu),
    }

    await createInvoice(payload)
    toast("Dane zostały wysłane:", {
      description: "Dane zostały wysłane.",
    })
    console.log(payload)
    form.reset()
  }

  return (
    <Card className='w-full sm:max-w-sm mx-auto mt-8 mb-24 '>
      <CardHeader>
        <CardTitle>Dodaj fakturę</CardTitle>
        <CardDescription>Dodaj nową fakturę.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id='form-rhf-demo' onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name='seller'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-title'>
                    Sprzedawca
                  </FieldLabel>
                  <Input
                    {...field}
                    id='form-rhf-demo-title'
                    aria-invalid={fieldState.invalid}
                    placeholder='Dodaj sprzedawcę'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='sellerAddress'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-title'>
                    Adres sprzedawcy
                  </FieldLabel>
                  <Input
                    {...field}
                    id='form-rhf-demo-title'
                    aria-invalid={fieldState.invalid}
                    placeholder='Dodaj adres sprzedawcy'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='nip'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-title'>NIP</FieldLabel>
                  <Input
                    {...field}
                    id='form-rhf-demo-title'
                    aria-invalid={fieldState.invalid}
                    placeholder='Dodaj NIP sprzedawcy'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='number'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-title'>
                    Numer faktury
                  </FieldLabel>
                  <Input
                    {...field}
                    id='form-rhf-demo-title'
                    aria-invalid={fieldState.invalid}
                    placeholder='Dodaj numer faktury'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='date'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-title'>
                    Data faktury
                  </FieldLabel>
                  <Input
                    type='date'
                    {...field}
                    value={
                      field.value instanceof Date &&
                      !isNaN(field.value.getTime())
                        ? field.value.toISOString().split("T")[0]
                        : ""
                    }
                    onChange={(e) => {
                      field.onChange(new Date(e.target.value))
                    }}
                    id='form-rhf-demo-title'
                    aria-invalid={fieldState.invalid}
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='name'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-description'>
                    Opis
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id='form-rhf-demo-description'
                    placeholder='Krótki opis faktury.'
                    rows={6}
                    className='min-h-24 resize-none'
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='amount'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-description'>
                    Kwota brutto faktury
                  </FieldLabel>
                  <Input
                    {...field}
                    type='number'
                    id='form-rhf-demo-description'
                    placeholder='Kwota faktury.'
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='ptu'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-description'>
                    Kwota PTU
                  </FieldLabel>
                  <Input
                    {...field}
                    type='number'
                    id='form-rhf-demo-description'
                    placeholder='Kwota PTU.'
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='paymentMethod'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='responsive'
                  data-invalid={fieldState.invalid}
                >
                  <FieldContent>
                    <FieldLabel htmlFor='form-rhf-select-language'>
                      Metoda płatności
                    </FieldLabel>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </FieldContent>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id='form-rhf-select-language'
                      aria-invalid={fieldState.invalid}
                      className='min-w-[120px]'
                    >
                      <SelectValue placeholder='Wybierz' />
                    </SelectTrigger>
                    <SelectContent position='item-aligned'>
                      <SelectItem value='auto'>Auto</SelectItem>
                      <SelectSeparator />
                      {paymentMethods.map((metod) => (
                        <SelectItem key={metod.value} value={metod.value}>
                          {metod.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
            <Controller
              name='status'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='responsive'
                  data-invalid={fieldState.invalid}
                >
                  <FieldContent>
                    <FieldLabel htmlFor='form-rhf-select-language'>
                      Status
                    </FieldLabel>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </FieldContent>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id='form-rhf-select-language'
                      aria-invalid={fieldState.invalid}
                      className='min-w-[120px]'
                    >
                      <SelectValue placeholder='Wybierz' />
                    </SelectTrigger>
                    <SelectContent position='item-aligned'>
                      {status.map((metod) => (
                        <SelectItem key={metod.value} value={metod.value}>
                          {metod.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
            <Controller
              name='paymentDate'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-title'>
                    Data płatności
                  </FieldLabel>
                  <Input
                    type='date'
                    {...field}
                    value={
                      field.value instanceof Date &&
                      !isNaN(field.value.getTime())
                        ? field.value.toISOString().split("T")[0]
                        : ""
                    }
                    onChange={(e) => {
                      field.onChange(new Date(e.target.value))
                    }}
                    id='form-rhf-demo-title'
                    aria-invalid={fieldState.invalid}
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field
          orientation='horizontal'
          className='w-full flex justify-between   '
        >
          <Button type='button' variant='outline' onClick={() => form.reset()}>
            Reset
          </Button>
          <Button
            type='submit'
            form='form-rhf-demo'
            disabled={form.formState.isSubmitting}
            className='w-1/2'
          >
            Dodaj
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}

export default AddInvoiceForm
