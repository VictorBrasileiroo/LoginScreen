import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from 'react-icons/fa';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import  img1 from '@/assets/img1.svg';
import  img2 from '@/assets/img2.svg';

export function SingIn() {
    return (
        <>
            <main className="w-screen h-screen flex flex-col sm:flex-row">
                <div className="bg-gray-50 w-full h-full p-16 items-center justify-center ml-4 hidden sm:flex">
                    <Carousel className='w-full max-w-xl'>
                        <CarouselContent>
                            <CarouselItem>
                                <div className="flex aspect-square rounded p-8">
                                    <img src={img1} alt="Descrição da imagem" />
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex aspect-square rounded p-8">
                                    <img src={img2} alt="Descrição da imagem" />
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className='w-12 h-12 bg-gray-300'/>
                        <CarouselNext className='w-12 h-12 bg-gray-300'/>
                    </Carousel>
                </div>
                <section className="h-full bg-gray-50 flex max-w-3xl w-full p-4 items-center justify-center">
                    <Card className='w-full max-w-md'>
                        <CardHeader className="">
                            <CardTitle className="text-2xl font-bold tracking-tighter">
                                Entre com sua conta!
                            </CardTitle>
                            <CardDescription>
                                Utilize seu e-mail ou conta no GitHub para fazer Login.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='flex flex-col gap-6'>
                            <div>
                                <Label className='text-base' htmlFor='email'><span className="font-semibold">E-mail</span></Label>
                                <Input placeHolder='Digite seu E-mail' id='email' type='email'></Input>
                            </div>

                            <div>
                                <Label className='text-base' htmlFor='password'><span className="font-semibold">Senha</span></Label>
                                <Input placeHolder='Digite sua Senha' id='password' type='password'></Input>
                            </div>

                            <Button className='w-full mt-4 font-semibold hover:bg-green-700'>Entrar</Button>
                            
                            <div className="flex items-center gap-6">
                                <Separator></Separator>
                                <span className="font-medium text-sm text-gray-400">OU</span>
                                <Separator></Separator>
                            </div>

                            <Button variant='outline' className='w-full mt-2 font-medium hover:bg-gray-100 flex justify-center'>
                                <FaGithub className='mr-5 w-4 h-5'/>
                                <span>Entrar com o GitHub</span>
                            </Button>
                        </CardContent>
                        <CardFooter>
                            <p className='text-sm text-center text-gray-500'>Ao entrar em nossa plataforma você concorda com os Termos de Uso e com a Política da Empresa.</p>
                        </CardFooter>
                    </Card>
                </section>
            </main>
        </>
    )
}