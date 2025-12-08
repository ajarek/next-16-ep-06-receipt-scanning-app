import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectSeparator,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { getInvoiceById } from "@/lib/actions/getInvoiceById"
import { updateInvoice } from "@/lib/actions/updateInvoice"

const paymentMethods = [
  { label: "Gotówka", value: "gotówka" },
  { label: "Przelew", value: "przelew" },
  { label: "Karta", value: "karta" },
] as const
const status = [
  { label: "Zapłacona", value: "zapłacona" },
  { label: "Niezapłacona", value: "niezapłacona" },
] as const

const EditInvoice = async ({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>
}) => {
  const { id } = await searchParams
  const invoice = await getInvoiceById(Number(id))

  console.log(id)
  if (!invoice) {
    return (
      <div className='flex h-screen w-full items-center justify-center'>
        <h1 className='text-2xl font-bold'>Faktura nie została znaleziona</h1>
      </div>
    )
  }

  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id)
  return (
    <Card className='w-full sm:max-w-sm mx-auto mt-8 mb-24 '>
      <CardHeader>
        <CardTitle>Edycja faktury</CardTitle>
        <CardDescription>Edycja faktury.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id='form-rhf-demo' action={updateInvoiceWithId}>
          <FieldGroup>
            <Label htmlFor='form-rhf-demo-title'>Sprzedawca</Label>
            <Input
              id='form-rhf-demo-title'
              name='seller'
              defaultValue={invoice.seller}
              placeholder='Dodaj sprzedawcę'
              autoComplete='off'
            />
            <Label htmlFor='form-rhf-demo-title'>Adres sprzedawcy</Label>
            <Input
              id='form-rhf-demo-title'
              name='sellerAddress'
              defaultValue={invoice.sellerAddress}
              placeholder='Dodaj adres sprzedawcy'
              autoComplete='off'
            />
            <Label htmlFor='form-rhf-demo-title'>NIP sprzedawcy</Label>
            <Input
              id='form-rhf-demo-title'
              name='nip'
              defaultValue={invoice.nip}
              placeholder='Dodaj NIP sprzedawcy'
              autoComplete='off'
            />
            <Label htmlFor='form-rhf-demo-title'>Numer faktury</Label>
            <Input
              id='form-rhf-demo-title'
              name='number'
              defaultValue={invoice.number}
              placeholder='Dodaj numer faktury'
              autoComplete='off'
            />
            <Label htmlFor='form-rhf-demo-title'>Data faktury</Label>
            <Input
              type='date'
              name='date'
              defaultValue={
                invoice.date
                  ? new Date(invoice.date).toISOString().split("T")[0]
                  : ""
              }
              id='date'
              autoComplete='off'
            />
            <Label htmlFor='form-rhf-demo-title'>Opis faktury</Label>
            <Textarea
              name='name'
              defaultValue={invoice.name}
              id='name'
              placeholder='Krótki opis faktury.'
              rows={6}
              className='min-h-24 resize-none'
            />
            <Label htmlFor='form-rhf-demo-title'>Kwota faktury</Label>
            <Input
              type='number'
              name='amount'
              defaultValue={invoice.amount}
              id='amount'
              placeholder='Kwota faktury.'
            />
            <Label htmlFor='form-rhf-demo-title'>Kwota PTU</Label>
            <Input
              type='number'
              name='ptu'
              defaultValue={invoice.ptu}
              id='ptu'
              placeholder='Kwota PTU.'
            />
            <Label htmlFor='form-rhf-demo-title'>Metoda płatności</Label>
            <Select name='paymentMethod' defaultValue={invoice.paymentMethod}>
              <SelectTrigger
                id='form-rhf-select-language'
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
            <Label htmlFor='form-rhf-demo-title'>Status</Label>
            <Select name='status' defaultValue={invoice.status}>
              <SelectTrigger
                id='form-rhf-select-language'
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
            <Label htmlFor='form-rhf-demo-title'>Data płatności</Label>
            <Input
              type='date'
              name='paymentDate'
              defaultValue={
                invoice.paymentDate
                  ? new Date(invoice.paymentDate).toISOString().split("T")[0]
                  : ""
              }
              id='form-rhf-demo-title'
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button type='submit' form='form-rhf-demo' className='w-1/2'>
          Aktualizacja
        </Button>
      </CardFooter>
    </Card>
  )
}

export default EditInvoice
